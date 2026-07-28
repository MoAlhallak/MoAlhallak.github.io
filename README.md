# Portfolio – Mohammad Al Hallak

Persönliche, zweisprachige (Deutsch / Englisch) Portfolio-Website von **Mohammad Al Hallak** –
B.Sc. Informatik und M.Sc.-Student Internet-Sicherheit. Schwerpunkte: Full-Stack- und
Backend-Entwicklung, Datenanalyse sowie Security-nahe Softwarelösungen.

Die Seite ist eine reine statische Website und läuft ohne Build-Prozess direkt über **GitHub Pages**.

🔗 **Live:** https://moalhallak.github.io/

---

## ✨ Merkmale

- Vollständig **responsive** (Desktop, Tablet, Smartphone) mit mobiler Navigation
- **Dreisprachig** (DE | EN | AR) – Umschalter oben rechts, Auswahl wird in `localStorage` gespeichert; Arabisch inkl. **RTL-Layout**
- **Hell- und Dunkelmodus** – umschaltbar per Button, gespeichert in `localStorage`, respektiert die System-Einstellung (`prefers-color-scheme`)
- Professioneller **Dark Mode** als Standard (dunkelgrauer Hintergrund, blaue Akzente)
- **Barrierearm**: semantisches HTML, sichtbare Fokuszustände, `aria`-Labels, Skip-Link, Tastaturbedienung
- Dezente **Scroll-Animationen** (respektieren `prefers-reduced-motion`)
- **SEO-** und **Open-Graph-Metadaten**
- Sichere externe Links (`target="_blank"` + `rel="noopener noreferrer"`)
- Keine Frameworks, kein npm, kein Tracking

---

## 🛠️ Verwendete Technologien

- **HTML5** – semantische Struktur
- **CSS3** – Custom Properties, Flexbox & Grid, Media Queries
- **Vanilla JavaScript** – Sprachumschaltung, mobile Navigation, IntersectionObserver
- **Inline-SVG** – Icons und Profil-Platzhalter (keine externen Bilddateien)

Keine externen Abhängigkeiten, kein Build-Schritt.

---

## 🚀 Lokal starten

Da es sich um eine statische Website handelt, genügt es, `index.html` im Browser zu öffnen.
Für ein realistischeres Verhalten (z. B. korrekte Pfade) empfiehlt sich ein lokaler Server:

```bash
# Variante 1: Python (falls installiert)
python -m http.server 8000
# danach im Browser öffnen: http://localhost:8000

# Variante 2: Node (falls installiert)
npx serve .
```

Alternativ: Datei einfach per Doppelklick auf `index.html` öffnen.

---

## 📁 Projektstruktur

```
.
├── index.html                     # Seiteninhalt (semantisches HTML)
├── styles.css                     # Styling, Dark Mode, Responsivität
├── script.js                      # Sprachumschaltung, Navigation, Animationen
├── README.md                      # Diese Datei
├── .nojekyll                      # Deaktiviert Jekyll-Verarbeitung auf GitHub Pages
├── assets/
│   └── profile-placeholder.svg    # Initialen-Platzhalter „MA“
└── documents/                     # Platz für Lebenslauf / Portfolio-PDF (siehe unten)
```

---

## 🌐 Deployment über GitHub Pages

Das Repository ist als **`MoAlhallak.github.io`** angelegt und wird daher automatisch
als persönliche GitHub-Pages-Seite veröffentlicht.

1. Alle Dateien in den `main`-Branch pushen.
2. Im Repository: **Settings → Pages** öffnen.
3. Unter **Build and deployment → Source** die Option **„Deploy from a branch“** wählen.
4. Als Branch **`main`** und Ordner **`/ (root)`** auswählen und speichern.
5. Nach kurzer Zeit ist die Seite unter **https://moalhallak.github.io/** erreichbar.

Die Datei `.nojekyll` stellt sicher, dass alle Dateien unverändert ausgeliefert werden.

---

## 🖼️ Profilbild austauschen

Standardmäßig wird ein professioneller Initialen-Platzhalter mit „MA“ verwendet
(`assets/profile-placeholder.svg`).

So fügst du ein echtes Foto ein:

1. Foto (z. B. `profile.jpg` oder `profile.png`) in den Ordner `assets/` legen.
   Empfohlen: quadratisch, mindestens 320 × 320 px.
2. In `index.html` im Hero-Bereich das `src`-Attribut anpassen:

   ```html
   <!-- vorher -->
   <img src="assets/profile-placeholder.svg" alt="..." ... />

   <!-- nachher -->
   <img src="assets/profile.jpg" alt="Porträtfoto von Mohammad Al Hallak" ... />
   ```

3. Optional den `alt`-Text an das echte Foto anpassen.

---

## 📄 Lebenslauf und Portfolio-PDF ergänzen

Der Ordner `documents/` ist für Dateien wie Lebenslauf oder ein Portfolio-PDF vorgesehen.

1. Datei ablegen, z. B. `documents/Lebenslauf_Mohammad_Al_Hallak.pdf`.
2. In `index.html` einen Download-Link ergänzen, z. B. im Hero- oder Kontaktbereich:

   ```html
   <a
     class="btn btn--ghost"
     href="documents/Lebenslauf_Mohammad_Al_Hallak.pdf"
     target="_blank"
     rel="noopener noreferrer"
   >
     Lebenslauf (PDF)
   </a>
   ```

3. Für die englische Version ggf. einen passenden `data-i18n`-Schlüssel in
   `script.js` (Objekt `translations`) ergänzen.

---

## 🔒 Datenschutz

Diese Website verwendet **keine Tracking- oder Analyse-Cookies** und bindet keine
externen Ressourcen ein.

---

## 📬 Kontakt

- **E-Mail:** mohammedalhallak99@gmail.com
- **GitHub:** [github.com/MoAlhallak](https://github.com/MoAlhallak)
- **LinkedIn:** [mohammad-al-hallak](https://www.linkedin.com/in/mohammad-al-hallak-97b40b334)
- **Standort:** Velbert, Nordrhein-Westfalen

---

© Mohammad Al Hallak
