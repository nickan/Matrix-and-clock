# Matrix Rain + Clock 🕐

[![RU](https://img.shields.io/badge/lang-Русский-red)](README.md)

Matrix rain animation with clock and date overlay — a live wallpaper for [Lively Wallpaper](https://www.rocksdanister.com/lively/).

![preview](https://github.com/nickan/Matrix-and-clock/assets/143292344/16a02ee4-9383-4339-8436-a740b7cf97bc)

## 📜 Project History

| Date | Author | Changes |
|------|--------|---------|
| — | [parambirs](https://github.com/parambirs/matrix) | Original Matrix Rain animation using HTML5 Canvas |
| 2020-09-05 | khuong | Added Lively customizable options (rainbow / color select) |
| 2024-04-17 | [Nickan](https://github.com/nickan) | Added clock, date, scaling, and extended settings |

> **Note:** This is a fork. I (Nickan) added the clock, date display, and extended customization options. Original project: [parambirs/matrix](https://github.com/parambirs/matrix).

## ✨ Features

- 🌧️ **Matrix Rain** — classic falling characters animation (Katakana)
- 🕐 **Clock & Date** — current time, day of the week, and date displayed over the animation
- 🌈 **Rainbow Mode** — smooth color-shifting characters with adjustable speed
- 🎨 **Custom Colors** — separate color settings for characters, clock, and background
- 📐 **Scaling** — adjustable clock size
- 🔄 **Horizontal / Vertical** clock layout
- 🖥️ **Dual Monitor Support** (at resolutions ≥ 2560px)
- ⚙️ **Full Lively Wallpaper Integration** — all settings accessible from the Lively interface

## 🖼️ Settings Screenshots

![Color settings](image/image-1.png)

![Display settings](image/image-2.png)

![Scaling](image/scale.jpg)

![Horizontal/vertical clock](image/Запись-2024-04-21-205243.gif)

## 📦 Installation

1. Install [Lively Wallpaper](https://www.rocksdanister.com/lively/) (free, from Microsoft Store / GitHub)
2. Download or clone this repository:
   ```
   git clone https://github.com/nickan/Matrix-and-clock.git
   ```
3. Copy the project folder to the Lively wallpapers directory:
   ```
   AppData\Local\Packages\12030rocksdanister.LivelyWallpaper_97hta09mmv6hy\LocalCache\Local\Lively Wallpaper\Library\wallpapers
   ```
   Or open the folder via the Lively interface:

   ![Open folder](image/image.png)

4. Restart Lively Wallpaper — the wallpaper will appear in the library.

## ⚠️ Dual Monitor

The dual monitor feature uses a CSS media query `(min-width: 2560px)`. If your combined resolution exceeds 4K, extra clocks may appear. Recommended setup:

- Set the wallpaper mode to **"Copy"** in Lively settings
- Works best with two 2560×1440 (2K) monitors

If you encounter bugs, please report them in the [lolz.live thread](https://lolz.live/threads/8985803/).

## 🛠️ Technologies

- HTML5 Canvas
- Vanilla JavaScript
- CSS3

## 📄 License

Original project by [parambirs](https://github.com/parambirs/matrix), inspired by [thecodeplayer.com](http://thecodeplayer.com/walkthrough/matrix-rain-animation-html5-canvas-javascript).
