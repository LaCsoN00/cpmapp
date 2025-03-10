import { Project as PrismaProject, Task as PrismaTask } from '@prisma/client'; // Suppression de l'importation User

export type PaymentMethod = "CHEQUE" | "VIREMENT" | "ESPECE"; // Ajout de PaymentMethod

export type TaskStatus = "To Do" | "In Progress" | "Done"; // Définition d'un type pour les statuts de tâche

export type Project = PrismaProject & {
  totalTasks?: number;
  collaboratorsCount?: number;
  taskStats?: {
    toDo: number;
    inProgress: number;
    done: number;
  };
  percentages?: {
    progressPercentage: number;
    inProgressPercentage: number;
    toDoPercentage: number;
  };
  tasks?: Task[]; // Référence à Task sans utiliser User
  // Retirer users et createdBy si tu n'as plus besoin de ces références
};

export type Task = PrismaTask & {
  user?: null; // Pas de référence à User
  createdBy?: null; // Pas de référence à User
};
