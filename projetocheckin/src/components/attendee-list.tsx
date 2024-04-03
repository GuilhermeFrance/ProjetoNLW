import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, } from 'lucide-react'  
import { IconButton } from './icon-button'
import { Table } from './table/table'
import { TableHeader } from './table/table-header'
import  dayjs from 'dayjs'
import  'dayjs/Locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'
import { TableCell } from './table/table-cell'
import { TableRow } from './table/table-row'
import { attendees } from '../data/attendees'
import { useState } from 'react'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')


export function AttendeeList() {
 
const totalPages = Math.ceil(attendees.length /10)

function goToFirstPage(){

        setPage(1)
}    

function goToNextPage(){

   setPage(page+1)
}

function goToPreviousPage(){

    setPage(page-1)
}
function goToLastPage(){

    setPage(totalPages)
}


const [page, setPage] = useState(1) 

    return (
        <div className='flex flex-col gap-4'>
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold ">Participantes</h1>
                    <div className="px-3 w-72 py-1.5 border border-white/10 bg-transparent rounded-lg text-sm flex items-center gap-3">
                        <Search className='size-4 text-emerald-300' />
                        <input className="bg-transparent border-0 p-0 text-sm flex-1 outline-none" placeholder="Buscar participante..." />
                    </div>
            
            </div>
        <Table>
                <thead>
                    <tr className='border-b border-white/10'>
                            <TableHeader style={{width: 48}} className='py-3 px-4 text-sm font-semibold text-left'> 
                                <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10  checked:bg-orange-400 ' />
                            </TableHeader>
                            <TableHeader >Codigo</TableHeader>
                            <TableHeader >Participantes</TableHeader>
                            <TableHeader >Data de inscrição</TableHeader>
                            <TableHeader >Data de check-in</TableHeader>
                            <TableHeader style={{width: 64}} ></TableHeader>
                    </tr>  
                </thead>
                <tbody>
                    {attendees.slice((page - 1) * 10,page * 10).map((attendee) => {
                        return (
                            <TableRow key={attendee.id}>
                        <TableCell> <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10 checked:bg-orange-400' /></TableCell>
                        <TableCell>{attendee.id}</TableCell>
                        <TableCell>
                            <div>
                                  <div className='flex flex-col gap-1'>
                                         <span className='font-semibold text-white'>{attendee.name}</span>
                                         <span>{attendee.email}</span>
                                    </div>
                            </div>
                        </TableCell>
                        <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
                        <TableCell>{dayjs().to(attendee.checkedInAt)}</TableCell>
                        <TableCell>
                            
                            <IconButton transparent={true}> 
                                <MoreHorizontal className='size-4' />
                            </IconButton>

                        </TableCell>
                    </TableRow >

                    )
                    })}
                </tbody>   
                <tfoot>
                    <tr>
                        <TableCell className='py-3 px-4 text-sm text-zinc-300' colSpan={3}>
                        Mostrando 10 de {attendees.length} itens
                        </TableCell>
                        <TableCell className='py-3 px-4 text-sm text-zinc-300 text-right' colSpan={3}>
                            <div className='inline-flex items-center gap-8'>
                                <span>Página {page} de {totalPages} </span>
                          

                            <div className='flex gap-1.5 '>
                                    <IconButton onClick={goToFirstPage} disabled={page === 1}>
                                        <ChevronsLeft className='size-4' />
                                    </IconButton>

                                    <IconButton onClick={goToPreviousPage} disabled={page === 1}>
                                        <ChevronLeft className='size-4' />
                                    </IconButton>

                                    <IconButton onClick={goToNextPage} disabled={page === totalPages}>
                                        <ChevronRight className='size-4' />
                                    </IconButton>

                                    <IconButton onClick={goToLastPage} disabled={page === totalPages}>
                                        <ChevronRight className='size-4' />
                                     </IconButton>
                                    </div>
                                </div>
                        </TableCell>
                    </tr>
                </tfoot> 
            </Table>
        
        
      </div>   

    )
}