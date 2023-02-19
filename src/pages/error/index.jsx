import { Link } from "react-router-dom";

export default function ErrorPage() {
	return (
		<div className="errorContainer">
			<p className="errorNumber">404</p>
			<p className="errorText">Oups! La page que vous demandez n'existe pas.</p>
			<Link to="/" className="errorLinkHome">
				Retourner sur la page d’accueil
			</Link>
		</div>
	);
}
