import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const documentContent = `
# Propuesta Comercial SYSDE para CODIMERSA — 11 de Marzo de 2026

## Información Principal:
- **Cliente**: CODIMERSA
- **Solución**: Sistema integral SYSDE SAF+ para Préstamos, Cajas, Cuentas de efectivo, Ahorros Fijos, Contabilidad y Tesorería
- **Empresa**: SYSDE - Especialistas en soluciones tecnológicas para el sector financiero
- **Modelo**: ON-CLOUD (en la nube)

## Módulos del Sistema:

### Administrativos:
1. Administración de Seguridad
2. Reglas de Negocio
3. Administración de Clientes
4. Contabilidad Financiera
5. Activos Fijos
6. Banca Móvil

### Colocación:
1. Administración de Préstamos
   - Créditos
   - Líneas de Crédito

### Tesorería:
1. Administración de Bancos
2. Administración de Cajas

### Captación:
1. Certificados de Depósitos

## Precios y Costos:

### Renta Mensual:
- 10 usuarios SYSDE SAF+: USD $10,000.00 mensuales
- Cada usuario adicional: USD $55.00 mensuales

### Set Up Fee:
- Pago inicial (una vez, a la firma): USD $50,000.00
- 12 cuotas mensuales de: USD $17,500.00
- Total Set Up Fee: USD $260,000.00

## Servicios Incluidos en la Renta:
- Licencia SYSDE SAF+ para 10 usuarios
- Gestión del Proyecto
- Planificación y Análisis
- Preparación para la Implementación
- Desarrollo de Interfaces
- Parametrización del aplicativo
- Capacitación progresiva
- Pruebas Integrales (Certificación)
- Puesta en Producción
- Acompañamiento a la operación

## Forma de Pago:
- Fee Inicial: Pago de USD $50,000.00 + 12 cuotas de USD $17,500.00
- Renta Mensual: Se factura el primer día hábil de cada mes a partir de la firma del contrato

## Timeline de Implementación (8 meses):
- Etapa 0: Gestión de Proyecto (M1-M8)
- Etapa 1: Planificación y Análisis (M1-M2)
- Etapa 2: Desarrollo de Adaptaciones (M2-M4)
- Etapa 3: Parametrización Base (M3-M5)
- Etapa 4: Capacitación (M5-M6)
- Etapa 5: Pruebas Integrales (M6-M7)
- Etapa 6: Puesta en Producción (M7-M8)
- Etapa 7: Acompañamiento (M8)

## Incluido en la propuesta:
- Desarrollo de requerimientos adicionales: INCLUIDO sin costo extra
- Migraciones de datos: INCLUIDAS sin costo extra
- Integraciones con terceros: INCLUIDAS a través del Core de APIs SYSDE, que expone servicios nativos para integración total con sistemas externos

## Infraestructura ON-CLOUD:
- Servidor de Aplicaciones: 4 cores, 16 GB RAM, 128 GB SSD, Windows Server 2019
- Servidor de Base de Datos: SQL SaaS, 4 núcleos, 16 GB RAM, 256 GB, MS SQL 2019
- Servidor Web/Servicios: 4 cores, 16 GB RAM, 128 GB SSD, Linux
- Servicios de Red: Respaldo diario, retención 15 días

## Acerca de SYSDE:
SYSDE es una empresa especializada en soluciones tecnológicas para el sector financiero.
`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `Eres un asistente especializado en la propuesta comercial de SYSDE para CODIMERSA. Tu trabajo es responder preguntas sobre esta propuesta de manera clara, profesional y útil.

INFORMACIÓN DEL DOCUMENTO:
${documentContent}

INSTRUCCIONES:
1. Responde SOLO sobre la información contenida en la propuesta de SYSDE para CODIMERSA
2. Si la pregunta no está relacionada con el documento, redirige educadamente hacia los temas de la propuesta
3. Sé claro, conciso y profesional en tus respuestas
4. Usa emojis moderadamente para hacer las respuestas más amigables
5. Si no tienes información específica sobre algo, sugiere contactar al equipo de SYSDE
6. Formatea las respuestas en markdown para mejor legibilidad`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Demasiadas consultas. Por favor intenta de nuevo en un momento." }), 
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Servicio de IA temporalmente no disponible." }), 
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "Error del servicio de IA. Por favor intenta de nuevo." }), 
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });

  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Error desconocido" }), 
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
