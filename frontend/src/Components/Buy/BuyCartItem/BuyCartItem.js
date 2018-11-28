class BuyCartItem extends Component {
    render() {
        return (
        	<div>
        		<hr class="hrblack"/>
				<table>
					<tr>
						<td>{this.props.price}</td>
						<td>TO</td>
		  				<td>{this.props.venmo}</td>
					</tr>
					<tr>
						<td></td>
						<td>FOR</td>
						<td>{this.props.title}</td>
					</tr>
				</table>

			</div>
        );
    }
}