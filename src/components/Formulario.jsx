import React from "react";
import { useState } from "react";
const fields = [
    {
        name: "budget",
        label: "Presupuesto",
        placeholder: "Selecciona un presupuesto",
        options: [
            { value: "low", label: "Bajo" },
            { value: "mid", label: "Medio" },
            { value: "high", label: "Alto" }
        ]                                                                                                                                                                                                                   
    },
    {
        name: "weather",
        label: "Clima",
        placeholder: "Selecciona un clima",
        options: [
            { value: "sunny", label: "Soleado" },
            { value: "rainy", label: "Lluvioso" },
            { value: "cold", label: "Frío" },
            { value: "hot", label: "Caluroso" }
        ]
    },
    {
        name: "company",
        label: "Compañía",
        placeholder: "Selecciona tu compañía",
        options: [
            { value: "alone", label: "Solo/a" },
            { value: "friends", label: "Amigos" },
            { value: "family", label: "Familia" }
        ]
    },
    {
        name: "time",
        label: "Tiempo disponible",
        placeholder: "Selecciona el tiempo disponible",
        options: [
            { value: "1-2-hours", label: "1 a 2 horas" },
            { value: "half-day", label: "Medio día" },
            { value: "full-day", label: "Día completo" }
        ]
    }, /* Tranquilo
Divertido
Creativo
Al aire libre
*/
    {
        name: "planType",
        label: "Tipo de plan",
        placeholder: "Selecciona el tipo de plan",
        options: [
            { value: "relaxing", label: "Tranquilo" },
            { value: "fun", label: "Divertido" },
            { value: "creative", label: "Creativo" },
            { value: "outdoor", label: "Al aire libre" }
        ]
    },
    {
        name: "interests",
        label: "Intereses",
        placeholder: "Selecciona tus intereses",
        options: [
            { value: "movies", label: "Películas/series" },
            { value: "food", label: "Comida" },
            { value: "sports", label: "Deportes" },
            { value: "games", label: "Juegos" },
            { value: "art", label: "Arte" },
            { value: "nature", label: "Naturaleza" }
        ]
    }
];
const [form, setForm] = useState({
    budget: "",
    weather: "",
    company: "",
    time: "",
    planType: "",
    interests: []
})
const activities = [
    {
        name: "Cine",
        budget: "mid",
        weather: ["rainy"],
        company: "friends",
        time: "1-2-hours",
        planType: "fun",
        interests: ["movies"]
    },
    {
        name: "Picnic en el parque",
        budget: "low",
        weather: ["sunny"],
        company: "family",
        time: "half-day",
        planType: "outdoor",
        interests: ["nature", "food"]
    },
    {
        name: "Clase de pintura",
        budget: "mid",
        weather: ["sunny"],
        company: "alone",
        time: "half-day",
        planType: "creative",
        interests: ["art"]
    },
    {
        name: "Partido de fútbol",
        budget: "low",
        weather: ["sunny"],
        company: "friends",
        time: "1-2-hours",
        planType: "fun",
        interests: ["sports"]
    },
    {
        name: "Cena en un restaurante",
        budget: "high",
        weather: ["rainy"],
        company: "family",
        time: "full-day",
        planType: "relaxing",
        interests: ["food"]
    }
]
export default function Formulario() {
    const [textPlan, setTextPlan] = useState("Proponte un plan para tu día");

    return (
        <main>

            <h2>PlanIt</h2>

            <div className="flex flex-col text-center justify-center items-center gap-y-2">
                {fields.map((field) => {
                    return (
                            <div    key={field.name}>
                                <p className="font-medium">{field.label}</p>

                                <select
                                    name={field.name}
                                    id={field.name}
                                    required
                                    className="border w-48 rounded-sm h-8 px-4"
                                >
                                    <option value="" disabled className="">
                                        {field.placeholder}
                                    </option>

                                    {field.options.map((option) => (
                                        <option
                                            key={option.value}
                                            value={option.value}
                                            className=""
                                        >
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                      
                    );
                })}
                <button onClick={() => {
                    setTextPlan(":)")
                }} className="text-blue-400 border rounded-lg w-48 h-12 hover:cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-300">Conocer mi dia</button>
            </div>                     
            <p>{textPlan}</p>
        </main>
    );
}

// Maratón de cine y pochoclos caseros
// Picnic y lectura en el parque
// Noche de juegos de mesa
// Recorrido por galerías de arte
// Senderismo y sesión de fotos
// Taller de repostería casera
// Tarde de juegos arcade y bowling
// Día de spa en casa
// Día de pesca en el lago
// Competencia de videojuegos online
// Paseo fotográfico urbano
// Escapada a un parque acuático
// Pintura en lienzo o mini mural
// Ruta de degustación en feria gastronómica
// Tarde de lectura en biblioteca pública
// Partido de fútbol o vóley al aire libre
// Noche de karaoke casero
// Cena temática e intercambio de recetas
// Búsqueda del tesoro con pistas
// Salida al cine o autocine