import { CalendarBuilder } from "core/CalendarCore";
import { Input } from "components/ui/pure/Input";

export const DatePicker = CalendarBuilder({
  Input: Input.CalendarInput,
  icons: {},
});
