export interface CourseDetailsItem {
  id?: string;
  title: string;
  description: string;
  time?: string;
  mandatory: boolean;
  certificateUrl?: string;
  userStatus: {
    completed: boolean;
    completionDate: string | null;
    startDate: string | null;
    prcentageCompleted: number;
  };
  company: {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
  };
}

export interface CourseDetailsItems {
  mandatoryCourses: CourseDetailsItem[];
}

export interface ModalContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
  courseDetailsItem: CourseDetailsItem | undefined;
  setCourseDetailsItem: (item: CourseDetailsItem) => void;
}
