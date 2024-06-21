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
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import CrownIcon from "@/assets/icons/crown-icon.svg"

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
    statistics: IPlayersData[]
}

export function DatePicker({
    dateFrom,
    dateTo,
    setDateFrom,
    setDateTo,
    statistics,
}: IDatePickerProps) {
    return (
        <div className="flex w-[350px] flex-col items-center gap-[50px] xmd:mx-auto sm:max-w-[350px] sm:gap-[20px]">
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
                                            " flex w-full justify-center border-none text-left font-serif text-[20px] font-normal text-[#000] shadow-none sm:text-[18px]",
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
            <Table className="m-0 w-full p-0 text-[22px] sm:text-[16px] ">
                <TableBody>
                    {statistics?.map((data, index) => (
                        <TableRow key={index} className="w-full border-none">
                            <TableCell className="pl-0">
                                {data.value1 || "N/A"}
                            </TableCell>
                            <TableCell className="w-[40px] pr-[10px] sm:pr-[3px]">
                                <CrownIcon className="w-[32px] text-[#E81068]" />
                            </TableCell>
                            <TableCell className="whitespace-nowrap pl-[10px] sm:pl-[3px]">
                                {data.heading}
                            </TableCell>
                            <TableCell className="pr-0 ">
                                {data.value2 || "N/A"}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
