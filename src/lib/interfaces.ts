export interface CourseDetailsItem {
  id?: string;
  title: string;
  description: string;
  time?: string;
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
