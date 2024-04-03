import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, } from 'lucide-react'  
import { IconButton } from './icon-button'
import { Table } from './table/table'
import { TableHeader } from './table/table-header'
import { TableCell } from './table/table-cell'
import { TableRow } from './table/table-row'
export function AttendeeList() {

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
                                <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10' />
                            </TableHeader>
                            <TableHeader >Codigo</TableHeader>
                            <TableHeader >Participantes</TableHeader>
                            <TableHeader >Data de inscrição</TableHeader>
                            <TableHeader >Data de check-in</TableHeader>
                            <TableHeader style={{width: 64}} ></TableHeader>
                    </tr>  
                </thead>
                <tbody>
                    {Array.from({length: 8}).map((_, i) => {
                        return (
                            <TableRow key={i}>
                        <TableCell> <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10 checked:bg-orange-400' /></TableCell>
                        <TableCell>321312123</TableCell>
                        <TableCell>
                            <div>
                                  <div className='flex flex-col gap-1'>
                                         <span className='font-semibold text-white'>Guilherme France</span>
                                         <span>guilhermefrance0@gmail.com</span>
                                    </div>
                            </div>
                        </TableCell>
                        <TableCell>7 dias atrás</TableCell>
                        <TableCell>3 dias atrás</TableCell>
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
                        Mostrando 10 de 228 itens
                        </TableCell>
                        <TableCell className='py-3 px-4 text-sm text-zinc-300 text-right' colSpan={3}>
                            <div className='inline-flex items-center gap-8'>
                                <span>Página 1 de 23</span>
                          

                            <div className='flex gap-1.5 '>
                                    <IconButton>
                                        <ChevronsLeft className='size-4' />
                                    </IconButton>

                                    <IconButton>
                                        <ChevronLeft className='size-4' />
                                    </IconButton>

                                    <IconButton>
                                        <ChevronRight className='size-4' />
                                    </IconButton>

                                    <IconButton>
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