export interface smartInterface {
  current_country_id: number;
  locations: Location[];
}

export interface Schedules {
    weekdays: string;
    hour: string;
}

export interface Location {
  id: number;
  title: string;
  content: string;
  opened: boolean;
  mask: string
  towel: "required" | "optional" | "not_required";
  fountain: "required" | "optional" | "not_required";
  locker_room: "allowed" | "closed";
  schedules: Schedules[];
}
