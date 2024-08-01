import Image from 'next/image';
import Link from 'next/link';
import '../styles/globals.css';

export default function Home() {
  return (
    <div>
      <header className="bg-gray-800 text-white py-4">
        <h1 className="text-center text-3xl">Willkommen bei GameMods Shop</h1>
        <nav className="text-center mt-2">
          <ul className="inline-flex space-x-4">
            <li><a href="#" className="text-white hover:text-gray-300">Startseite</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">Über uns</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">Shop</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">Kontakt</a></li>
          </ul>
        </nav>
      </header>

      <main className="mt-8 px-4">
        <section id="hero" className="bg-gray-100 p-4 text-center rounded">
          <h2 className="text-2xl">Deine Quelle für die besten Offline Game Mods</h2>
          <p>Finde die neuesten und besten Mods für deine Lieblingsspiele.</p>
          <button id="toggle-dark-mode" className="mt-4 px-4 py-2 bg-gray-800 text-white rounded">Toggle Dark Mode</button>
        </section>

        <section id="about" className="mt-8 p-4 bg-white rounded shadow">
          <h2 className="text-xl mb-2">Über uns</h2>
          <p>Wir sind ein Team von leidenschaftlichen Entwicklern, die sich darauf spezialisiert haben, hochwertige und ethisch korrekte Mods für Offline-Spiele zu erstellen.</p>
        </section>

        <section id="shop" className="mt-8 p-4 bg-white rounded shadow">
          <h2 className="text-xl mb-2">Shop</h2>
          <p>Entdecke unsere neuesten Mods und finde das perfekte Upgrade für dein Spiel.</p>
          <div className="mod-list flex justify-around">
            <div className="mod-item bg-white border rounded shadow p-2">
              <Image src="/images/mod1.jpg" alt="Mod 1" width={300} height={200} className="rounded"/>
              <h3 className="mt-2">Mod Name 1</h3>
              <p>Kurzbeschreibung des Mods.</p>
              <button className="bg-gray-800 text-white py-1 px-2 rounded">Kaufen</button>
            </div>
            <div className="mod-item bg-white border rounded shadow p-2">
              <Image src="/images/mod2.jpg" alt="Mod 2" width={300} height={200} className="rounded"/>
              <h3 className="mt-2">Mod Name 2</h3>
              <p>Kurzbeschreibung des Mods.</p>
              <button className="bg-gray-800 text-white py-1 px-2 rounded">Kaufen</button>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-8 p-4 bg-white rounded shadow">
          <h2 className="text-xl mb-2">Kontakt</h2>
          <p>Kontaktiere uns für Anfragen oder Unterstützung.</p>
          <form className="flex flex-col">
            <label htmlFor="name" className="mt-2">Name:</label>
            <input type="text" id="name" name="name" required className="p-2 border rounded"/>

            <label htmlFor="email" className="mt-2">Email:</label>
            <input type="email" id="email" name="email" required className="p-2 border rounded"/>

            <label htmlFor="message" className="mt-2">Nachricht:</label>
            <textarea id="message" name="message" required className="p-2 border rounded"></textarea>

            <button type="submit" className="bg-gray-800 text-white py-2 px-4 mt-4 rounded">Senden</button>
          </form>
        </section>
      </main>

      <footer className="mt-8 py-4 bg-gray-800 text-white text-center">
        <p>&copy; 2024 GameMods Shop. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}
