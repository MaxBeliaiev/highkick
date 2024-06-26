import CalendarIcon from "@/assets/icons/calendaer-icon.svg"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { DropdownMenu, } from "@/components/ui/dropdown-menu"

export interface IPlayersData {
    value1?: string
    value2?: string
    heading: string
}

interface IDatePickerProps {
    dateFrom?: Date
    dateTo?: Date
    setDateFrom: (date?: Date) => void
    setDateTo: (date?: Date) => void
}

export function DatePicker({
    dateFrom,
    dateTo,
    setDateFrom,
    setDateTo,
}: IDatePickerProps) {
    return (
        <div className="flex flex-col items-center gap-[50px] xmd:mx-auto sm:w-[350px] lsm:max-w-[500px] sm:gap-[20px]">
            <div className="flex w-full flex-col items-center gap-[14px]">
                <CalendarIcon className="w-[42px]" />

                <div className="flex w-full flex-col ">
                    <DropdownMenu>
                        <div className="flex w-full items-center justify-center rounded-[8px] bg-[#CDE6F2] px-[22px] py-[15px] [&[data-state=open]>svg]:rotate-180">
                            <Popover modal={false}>
                                <PopoverTrigger
                                    className="px-[30px] py-[15px] "
                                    asChild
                                    onClick={(event) => {
                                        event.stopPropagation()
                                    }}
                                >
                                    <Button
                                        className={cn(
                                            " flex w-full justify-center border-none text-left font-serif text-[20px] font-normal text-[#000] shadow-none sm:text-[18px] md:text-[18px]",
                                            !dateFrom &&
                                            "text-muted-foreground"
                                        )}
                                    >
                                        {dateFrom && dateTo ? (
                                            format(dateFrom, "dd.MM.yyyy") +
                                            " - " +
                                            format(dateTo, "dd.MM.yyyy")
                                        ) : (
                                            <span>Select Period</span>
                                        )}
                                    </Button>
                                </PopoverTrigger>

                                <PopoverContent
                                    className="w-auto border-[1px] border-[#000] p-0"
                                    align="center"
                                >
                                    <Calendar
                                        fromDate={
                                            new Date("2023-11-01")
                                        }
                                        toDate={
                                            new Date()
                                        }
                                        className="w-[350px] rounded-[8px] bg-[#FFF] sm:max-w-[350px]"
                                        mode="range"
                                        selected={{
                                            from: dateFrom,
                                            to: dateTo,
                                        }}
                                        onSelect={(dateRange) => {
                                            setDateFrom(dateRange?.from)
                                            setDateTo(dateRange?.to)
                                        }}
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    )
}
