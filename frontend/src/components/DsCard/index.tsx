import '../styles.css'
import NotificationButton from "../NotificationButton"

function DsCard() {
    return (
        <>
            <article>
                <h3>Vendas</h3>
                <section>
                    <input type="text" name="" id="" placeholder="01/01/2022" />
                    <input type="text" placeholder="03/04/2022" />
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