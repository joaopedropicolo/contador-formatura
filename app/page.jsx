"use client";
import { useEffect, useState } from "react";
import "./globals.css";

export default function Home() {
  const targetDate = new Date("2025-12-15T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;
      if (diff <= 0) {
        setFinished(true);
        clearInterval(timer);
      } else {
        setTimeLeft(diff);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return { days, hours, minutes, secs };
  };

  const { days, hours, minutes, secs } = formatTime(timeLeft);

  return (
    <main className="container">
      <h1>Contador da Formatura do Picolo – Turma: INFO 6A</h1>

      {!finished ? (
        <div className="contador">
          <p>
            {days}dias {hours}horas {minutes}minutos {secs}segundos
          </p>
          <span>Falta pouco para meus pesadelos se tornarem realidade</span>
        </div>
      ) : (
        <h2 className="mensagem">🎉 Parabéns, chegou o grande dia da nossa formatura! 🎉</h2>
      )}

      <p className="texto">
        Depois da formatura, pretendo não morrer de fome🙏
      </p>

    </main>
  );
}
