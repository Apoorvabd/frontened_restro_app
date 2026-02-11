import { create } from "zustand";

const userReservationStore = create((set) => ({
    showReservation: false,

    openReservation: () => set({ showReservation: true }),

    closeReservation: () => set({ showReservation: false }),

    toggleReservation: () => set((state) => ({ showReservation: !state.showReservation })),
}));

export default userReservationStore;