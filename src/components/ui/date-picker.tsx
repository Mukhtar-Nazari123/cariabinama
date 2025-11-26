"use client"

import * as React from "react"
import { format } from "date-fns-jalali"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerProps {
    date?: Date;
    onSelect?: (date?: Date) => void;
}


export function DatePicker({ date: initialDate, onSelect }: DatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(initialDate)

  const handleSelect = (selectedDate: Date | undefined) => {
      setDate(selectedDate);
      if (onSelect) {
          onSelect(selectedDate);
      }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-right font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="ms-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>یک تاریخ را انتخاب کنید</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
