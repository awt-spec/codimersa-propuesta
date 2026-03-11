import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Knowledge base del documento de propuesta
const documentContent = `
# Propuesta Comercial SYSDE para Pentágono - Leasing, Préstamos y Factoraje

## Información Principal:
- **Cliente**: Pentágono
- **Solución**: Sistema integral para Leasing, Arrendamiento, Préstamos y Factoraje
- **Empresa**: SYSDE - Especialistas en soluciones tecnológicas para el sector financiero

## Módulos del Sistema:

### 1. Módulo de Originación
- Gestión de solicitudes de crédito
- Análisis crediticio automatizado
- Flujo de aprobación configurable
- Integración con burós de crédito
- Scoring automático

### 2. Módulo de Cartera
- Administración de contratos activos
- Gestión de amortizaciones
- Seguimiento de pagos
- Control de vencimientos
- Reportes de cartera

### 3. Módulo de Cobranza
- Seguimiento de morosidad
- Gestión de cobro preventivo y correctivo
- Estrategias de cobranza
- Reportes de recuperación
- Integración con despachos

### 4. Módulo de Contabilidad
- Integración contable automática
- Generación de pólizas
- Conciliaciones bancarias
- Estados financieros
- Cumplimiento IFRS

### 5. Módulo de Tesorería
- Control de flujos de efectivo
- Administración de dispersiones
- Gestión de fondeos
- Conciliación bancaria
- Reportes de liquidez

### 6. Módulo de Reportes
- Dashboards ejecutivos en tiempo real
- Reportes regulatorios (CNBV/CONDUSEF)
- Análisis de portafolio
- Indicadores KPI
- Exportación a múltiples formatos

## Precios y Costos (Renta Mensual ON-CLOUD):
Modelo SaaS basado en número de contratos activos:
| Contratos | Monto Mensual USD |
|-----------|-------------------|
| 0 - 300   | $3,999.00         |
| 301 - 400 | $4,399.00         |
| 401 - 500 | $4,699.00         |
| 501 - 600 | $4,999.00         |
| 601 - 700 | $5,399.00         |
| 701 - 800 | $5,699.00         |
| 801 - 1000| $5,999.00         |
| +1001     | Por determinar    |

## Servicio Ilimitado SYSDE (incluido en la renta):
- Licencia SYSDE SAF+ (todos los módulos)
- Licencias de aplicación ilimitadas
- Capacitación continua del equipo
- Asistencia correctiva permanente
- Mantenimiento y actualizaciones
- Soporte técnico incluido

## Método de Pago:
- Pago mensual por adelantado, el primer día hábil de cada mes
- El pago inicial se requiere al momento de la firma del contrato

## Timeline de Implementación:
- **Fase 1** (Semanas 1-4): Configuración base e infraestructura
- **Fase 2** (Semanas 5-10): Módulos core (Originación, Cartera, Cobranza)
- **Fase 3** (Semanas 11-14): Integración (Contabilidad, Tesorería, Reportes)
- **Fase 4** (Semanas 15-16): Go-Live (Pruebas UAT, capacitación, arranque)
- **Tiempo total**: 3 a 4 meses

## Beneficios Principales:
- ✅ **Automatización**: Reduce tiempos operativos hasta un 60%
- ✅ **Cumplimiento regulatorio**: Reportes CNBV/CONDUSEF integrados
- ✅ **Escalabilidad**: Arquitectura cloud que crece con la operación
- ✅ **Visibilidad**: Dashboards en tiempo real del portafolio
- ✅ **Seguridad**: Encriptación, auditoría y control de accesos
- ✅ **Integración**: APIs abiertas para conectar sistemas existentes

## Infraestructura Propuesta:
- **Cloud hosting**: Alta disponibilidad (99.9% uptime)
- **Servidor**: 4 cores, 16 GB RAM, almacenamiento SSD
- **Seguridad**: Certificados SSL, firewall, backups automáticos
- **Base de datos**: PostgreSQL con réplicas de lectura
- **CI/CD**: Despliegues automatizados con zero-downtime

## Soporte y Mantenimiento:
- Soporte técnico en horario laboral (L-V 9:00-18:00)
- Sistema de tickets con SLA definidos
- Actualizaciones de seguridad y funcionales
- Base de conocimiento y documentación
- Capacitación inicial y sesiones de refuerzo

## Acerca de SYSDE:
SYSDE es una empresa especializada en soluciones tecnológicas para el sector financiero, con amplia experiencia en:
- Instituciones de leasing y arrendamiento
- Empresas de factoraje financiero
- Sofomes y entidades de crédito
- Consultores especializados en cumplimiento regulatorio
`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { question } = await req.json();
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `Eres un asistente especializado en la propuesta comercial de SYSDE para Pentágono. Tu trabajo es responder preguntas sobre esta propuesta de manera clara, profesional y útil.

INFORMACIÓN DEL DOCUMENTO:
${documentContent}

INSTRUCCIONES:
1. Responde SOLO sobre la información contenida en la propuesta de SYSDE para Pentágono
2. Si la pregunta no está relacionada con el documento, redirige educadamente hacia los temas de la propuesta
3. Sé claro, conciso y profesional en tus respuestas
4. Usa emojis moderadamente para hacer las respuestas más amigables
5. Si no tienes información específica sobre algo, sugiere contactar al equipo de SYSDE
6. Formatea las respuestas en markdown para mejor legibilidad

EJEMPLO DE RESPUESTA:
Si preguntan sobre precios: "💰 **Inversión propuesta:**\n- Implementación: $XX,XXX USD\n- Renta mensual: $X,XXX USD\n\n*Los montos exactos se definirán en la propuesta formal.*"`;

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
          { role: "user", content: question },
        ],
        max_tokens: 800,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ 
            error: "Demasiadas consultas. Por favor intenta de nuevo en un momento." 
          }), 
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ 
            error: "Servicio de IA temporalmente no disponible. Por favor contacta al soporte." 
          }), 
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ 
          error: "Error del servicio de IA. Por favor intenta de nuevo." 
        }), 
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content || 
      "Lo siento, no pude procesar tu pregunta. ¿Podrías reformularla?";

    return new Response(
      JSON.stringify({ response: aiResponse }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );

  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "Error desconocido" 
      }), 
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});