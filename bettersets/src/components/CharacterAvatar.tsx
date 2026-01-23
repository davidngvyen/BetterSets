import React from "react";

export interface CharacterCustomization {
    skinColor: string;
    hairStyle: string;
    hairColor: string;
    clothesStyle: string;
    clothesColor: string;
}

interface CharacterAvatarProps {
    customization: CharacterCustomization;
    size?: "sm" | "md" | "lg" | "xl";
}

export function CharacterAvatar({ customization, size = "md" }: CharacterAvatarProps) {
    const sizeMap = {
        sm: { container: 48, head: 28, body: 32, hair: 24 },
        md: { container: 64, head: 36, body: 42, hair: 32 },
        lg: { container: 96, head: 54, body: 64, hair: 48 },
        xl: { container: 128, head: 72, body: 86, hair: 64 },
    };

    const sizes = sizeMap[size];

    return (
        <div
            className="relative border-4 border-black bg-gradient-to-b from-cyan-300 to-cyan-500"
            style={{ width: sizes.container, height: sizes.container }}
        >
            {/* Body/Clothes */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 border-2 border-black"
                style={{
                    width: sizes.body,
                    height: sizes.body,
                    backgroundColor: customization.clothesColor,
                }}
            >
                {/* Clothes Style Overlay */}
                {customization.clothesStyle === "tank" && (
                    <div className="absolute inset-x-0 top-0 h-2 border-b-2 border-black bg-black/20" />
                )}
                {customization.clothesStyle === "hoodie" && (
                    <>
                        <div className="absolute inset-x-0 top-0 h-3 border-b-2 border-black bg-black/30" />
                        <div className="absolute left-0 top-0 h-4 w-2 border-r-2 border-black bg-black/20" />
                        <div className="absolute right-0 top-0 h-4 w-2 border-l-2 border-black bg-black/20" />
                    </>
                )}
                {customization.clothesStyle === "armor" && (
                    <>
                        <div className="absolute inset-0 border-2 border-black bg-gradient-to-b from-yellow-300/30 to-transparent" />
                        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 border-2 border-black bg-yellow-400" />
                    </>
                )}
            </div>

            {/* Head */}
            <div
                className="absolute left-1/2 top-2 -translate-x-1/2 border-2 border-black"
                style={{
                    width: sizes.head,
                    height: sizes.head,
                    backgroundColor: customization.skinColor,
                }}
            >
                {/* Eyes */}
                <div className="absolute left-1/4 top-1/3 h-2 w-2 -translate-x-1/2 border-2 border-black bg-black" />
                <div className="absolute right-1/4 top-1/3 h-2 w-2 translate-x-1/2 border-2 border-black bg-black" />

                {/* Mouth */}
                <div className="absolute bottom-1/3 left-1/2 h-1 w-3 -translate-x-1/2 border-2 border-black bg-black" />
            </div>

            {/* Hair */}
            <div
                className="absolute left-1/2 top-1 -translate-x-1/2 border-2 border-black"
                style={{
                    width: sizes.hair,
                    height: customization.hairStyle === "long" ? sizes.hair * 1.5 : sizes.hair * 0.8,
                    backgroundColor: customization.hairColor,
                }}
            >
                {customization.hairStyle === "spiky" && (
                    <>
                        <div className="absolute left-1/4 top-0 h-2 w-2 -translate-y-1 border-2 border-black bg-inherit" />
                        <div className="absolute left-1/2 top-0 h-3 w-2 -translate-x-1/2 -translate-y-2 border-2 border-black bg-inherit" />
                        <div className="absolute right-1/4 top-0 h-2 w-2 -translate-y-1 border-2 border-black bg-inherit" />
                    </>
                )}
                {customization.hairStyle === "mohawk" && (
                    <div className="absolute left-1/2 top-0 h-4 w-3 -translate-x-1/2 -translate-y-3 border-2 border-black bg-inherit" />
                )}
                {customization.hairStyle === "long" && (
                    <>
                        <div className="absolute left-0 top-1/2 h-3 w-2 border-2 border-black bg-inherit" />
                        <div className="absolute right-0 top-1/2 h-3 w-2 border-2 border-black bg-inherit" />
                    </>
                )}
            </div>
        </div>
    );
}

// Available customization options
export const skinColors = [
    { name: "Light", value: "#ffd5b5" },
    { name: "Tan", value: "#d4a373" },
    { name: "Medium", value: "#c68642" },
    { name: "Dark", value: "#8d5524" },
    { name: "Deep", value: "#5c4033" },
];

export const hairStyles = [
    { name: "Short", value: "short" },
    { name: "Spiky", value: "spiky" },
    { name: "Mohawk", value: "mohawk" },
    { name: "Long", value: "long" },
    { name: "Bald", value: "bald" },
];

export const hairColors = [
    { name: "Black", value: "#1a1a1a" },
    { name: "Brown", value: "#654321" },
    { name: "Blonde", value: "#ffd700" },
    { name: "Red", value: "#ff4500" },
    { name: "Blue", value: "#1e90ff" },
    { name: "Green", value: "#32cd32" },
    { name: "Pink", value: "#ff69b4" },
    { name: "Purple", value: "#9370db" },
];

export const clothesStyles = [
    { name: "T-Shirt", value: "tshirt", level: 1 },
    { name: "Tank Top", value: "tank", level: 1 },
    { name: "Hoodie", value: "hoodie", level: 5 },
    { name: "Armor", value: "armor", level: 10 },
    { name: "Cape", value: "cape", level: 15 },
];

export const clothesColors = [
    { name: "Red", value: "#ff3333" },
    { name: "Orange", value: "#ff6b35" },
    { name: "Yellow", value: "#ffd700" },
    { name: "Green", value: "#22c55e" },
    { name: "Blue", value: "#3b82f6" },
    { name: "Purple", value: "#a855f7" },
    { name: "Pink", value: "#ec4899" },
    { name: "Black", value: "#1a1a1a" },
    { name: "White", value: "#ffffff" },
];
