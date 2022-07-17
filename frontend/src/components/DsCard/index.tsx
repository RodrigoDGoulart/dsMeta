import '../styles.css'
import NotificationButton from "../NotificationButton"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

function DsCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    return (
        <>
            <article>
                <h3>Vendas</h3>
                <section>
                    <DatePicker
                        selected={minDate}
                        // selected: valor que terá no datepicker (data? numero? texto?)
                        // por padrão new Date pega a data atual
                        // react hook: mudar estado dos elementos
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                    {/* <input type="text" name="" id="" placeholder="01/01/2022" /> */}
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                    {/* <input type="text" placeholder="03/04/2022" /> */}
                </section>
                <section>
                    <table>
                        <tr>
                            <th className="show-992">ID</th>
                            <th className="show-576">Data</th>
                            <th>Vendedor</th>
                            <th className="show-992">Visitas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                        <tr>
                            <td className="show-992">1</td>
                            <td className="show-576">12/07/2022</td>
                            <td>Nome</td>
                            <td className="show-992">1</td>
                            <td>XXX</td>
                            <td>
                                <NotificationButton />
                            </td>
                        </tr>
                    </table>
                </section>
            </article>
        </>
    )
}

export default DsCard