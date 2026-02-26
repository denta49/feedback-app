import { Feedback } from "@/schemas/feedback";

import { User } from "../types/user";

export const mockUsers: User[] = [
  {
    id: "usr_1",
    name: "Admin Anna",
    email: "admin@portal.com",
    role: "admin",
  },
  {
    id: "usr_2",
    name: "Jan Kowalski",
    email: "jan@example.com",
    role: "user",
  },
  {
    id: "usr_3",
    name: "Piotr Nowak",
    email: "piotr@example.com",
    role: "user",
  },
];

export const mockFeedbacks: Feedback[] = [
  {
    id: 1,
    userId: "usr_2",
    status: "new",
    title: "Dodanie Dark Mode",
    description:
      "Fajnie by było móc przełączyć aplikację na ciemny motyw, strasznie razi w oczy wieczorem.",
    createdAt: new Date("2023-10-15T10:00:00Z"),
    comments: [],
  },
  {
    id: 2,
    userId: "usr_3",
    status: "in-progress",
    title: "Aplikacja ładuje się wolno na mobile",
    description:
      "Przy wejściu na stronę główną z telefonu z Androidem muszę czekać około 5 sekund.",
    createdAt: new Date("2023-10-16T12:30:00Z"),
    comments: [
      {
        id: 1,
        feedbackId: 2,
        userId: "usr_1",
        content:
          "Dzięki za zgłoszenie! Właśnie to profilujemy, wygląda na problem z optymalizacją obrazków.",
        createdAt: new Date("2023-10-16T13:00:00Z"),
      },
    ],
  },
  {
    id: 3,
    userId: "usr_2",
    status: "done",
    title: "Błąd przy zmianie hasła",
    description: "Kiedy wpisuję nowe hasło ze znakiem zapytania, wywala błąd 500.",
    createdAt: new Date("2023-10-10T09:15:00Z"),
    comments: [
      {
        id: 2,
        feedbackId: 3,
        userId: "usr_1",
        content: "Poprawione w wczorajszym release. Problemem był zły regex po stronie serwera.",
        createdAt: new Date("2023-10-11T08:00:00Z"),
      },
      {
        id: 3,
        feedbackId: 3,
        userId: "usr_2",
        content: "Potwierdzam, teraz działa. Dzięki!",
        createdAt: new Date("2023-10-11T10:20:00Z"),
      },
    ],
  },
];
