"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner"; // Assuming sonner is installed or we use a compatible toaster
// Use standard fetch or axios for now, replicating apiCall logic
// In a real app we might use react-query or similar

interface User {
    id: string;
    email: string;
    name: string;
    bio?: string;
    workoutCount?: number;
    totalVolume?: number;
    currentStreak?: number;
    character?: any; // Defined in CharacterAvatar
}

interface AppContextType {
    user: User | null;
    isLoading: boolean;
    updateCharacter: (character: any) => void;
    setUser: (user: User | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error("useApp must be used within AppProvider");
    return context;
};

export function AppProvider({ children, initialUser }: { children: React.ReactNode; initialUser?: User | null }) {
    const [user, setUser] = useState<User | null>(initialUser || null);
    const [isLoading, setIsLoading] = useState(!initialUser);
    useEffect(() => {
        setIsLoading(false);
    }, []);

    const updateCharacter = (character: any) => {
        if (user) {
            setUser({ ...user, character });
            // In a real app, we would also save this to the backend here
        }
    };

    return (
        <AppContext.Provider
            value={{
                user,
                isLoading,
                updateCharacter,
                setUser
            }}
        >
            {children}
        </AppContext.Provider>
    );
}
