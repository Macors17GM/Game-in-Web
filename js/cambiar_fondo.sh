#!/bin/bash

# Generar un color aleatorio en formato hexadecimal
COLOR=$(printf "#%02X%02X%02X" $((RANDOM%256)) $((RANDOM%256)) $((RANDOM%256)))

# Crear una imagen sólida de ese color (1080x1920)
convert -size 1080x1920 xc:"$COLOR" /sdcard/fondo_color.png

# Cambiar el fondo de pantalla con Termux:API
termux-wallpaper -f /sdcard/fondo_color.png

echo "Fondo de pantalla cambiado a color $COLOR"
