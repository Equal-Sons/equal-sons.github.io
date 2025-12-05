export default function FooterSeven() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer-wrapper footer-layout8 overflow-hidden bg-theme">
			<div className="container">
				<div className="copyright-wrap">
					<div className="row py-4 justify-content-between align-items-center">
						<div className="col-md-6">
							<p className="mb-2">
								<strong>Equal Sons</strong>
							</p>
							<p className="mb-2">Build. Lead. Share.</p>
							<p className="mb-0">Richmond, VA</p>
						</div>
						<div className="col-md-6 align-self-center text-md-end">
							<p className="mb-2">
								<a href="mailto:info@equalsons.com">info@equalsons.com</a>
							</p>
							<p className="copyright-text mb-0">© {currentYear} Equal Sons</p>
							<p className="copyright-text mb-0">
								A boutique consulting firm for businesses ready to move.
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
