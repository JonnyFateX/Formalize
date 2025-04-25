import { FaQuestion, FaCalendar, FaUser, FaLightbulb, FaPoll } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { useMemo } from "react";
import './Home.css'

export default function Home(){
    const data = [
        {
            name: 'Quiz',
            quantity: 52,
        },
        {
            name: 'Poll',
            quantity: 47,
        },
        {
            name: 'Single Question',
            quantity: 32,
        },
        {
            name: 'Assistance',
            quantity: 25,
        },
        {
            name: 'Contact Data',
            quantity: 9,
        },
    ]

    const columns = useMemo(
        () => [
                {
                    header: 'Name',
                    accessorKey: 'name',
                },
                {
                    header: 'Times Used',
                    accessorKey: 'quantity',
                },
            ],
        [],
    )

    const table = useMaterialReactTable({
        columns,
        data,
        enableSorting: false,
        enableColumnFilterModes: false,
        enableRowSelection: false,
        enableColumnOrdering: true,
        enableGlobalFilter: false,
        enableCellActions: false,
        enableColumnFilters: false,
        enableEditing: false,
        enableFilters: false,
        enableTopToolbar: false,
        enablePagination: false,
        enableColumnActions: false,
        enableColumnDragging: false,
        enableBottomToolbar: false,
        muiTableBodyRowProps: {
            sx: {
                backgroundColor: "var(--main-color)",
            },
        },
        muiTableBodyCellProps: {
            sx: {
                borderBottomWidth: "3px",
                color: "white",
                textAlign: "center",
                fontSize: "1rem",
            }
        },
        muiTableHeadCellProps:{
            sx:{
                color: "white",
                fontSize: "1.15rem",
                fontWeight: "500",
                borderBottomWidth: "5px",
                backgroundColor: "var(--dark-background-color)",
                '& .MuiBox-root': {
                    justifyContent: 'center',
                },
            }
        },
    })
    return(
        <>
            <div className="template-selection-container">
                <h1 className="template-selection-title">Formalize it</h1>
                <div className="templates">
                    <div className="template-container">
                        <h2 className="template-title">Single question</h2>
                        <NavLink className="template-link"><FaQuestion className="template-icon"/></NavLink>
                    </div>
                    <div className="template-container">
                        <h2 className="template-title">Assistance</h2>
                        <NavLink className="template-link"><FaCalendar className="template-icon"/></NavLink>
                    </div>
                    <div className="template-container">
                        <h2 className="template-title">Contact Data</h2>
                        <NavLink className="template-link"><FaUser className="template-icon"/></NavLink>
                    </div>
                    <div className="template-container">
                        <h2 className="template-title">Quiz</h2>
                        <NavLink className="template-link"><FaLightbulb className="template-icon"/></NavLink>
                    </div>
                    <div className="template-container">
                        <h2 className="template-title">Poll</h2>
                        <NavLink className="template-link"><FaPoll className="template-icon"/></NavLink>
                    </div>
                </div>
            </div>
            <div className="home-section2">
                <div className="section-container your-templates-container">
                    <h1 className="your-templates-title">Your templates:</h1>
                    <NavLink className="your-template-link">
                        <FaQuestion className="your-template-icon"/>
                        <h2 className="your-template-title">Do birds sing?</h2>
                    </NavLink>
                    <NavLink className="your-template-link">
                        <FaPoll className="your-template-icon"/>
                        <h2 className="your-template-title">Are you coming on Friday?</h2>
                    </NavLink>
                </div>
                <div className="section-container">
                    <MaterialReactTable table={table} />
                    <NavLink className="templates-link">Find all templates!</NavLink>
                </div>
            </div>
        </>
    )
}