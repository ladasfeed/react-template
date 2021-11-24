import { CalendarBuilder } from "core/CalendarCore";
import { Input } from "components/ui/pure/Input";
import { Icons } from "assets/icons";

export const DatePicker = CalendarBuilder({
  Input: Input.CalendarInput,
  icons: {},
});
