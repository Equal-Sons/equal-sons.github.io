import { useEffect } from "react";

interface ImageLightboxProps {
	isOpen: boolean;
	images: string[];
	currentIndex: number;
	onClose: () => void;
	onNext: () => void;
	onPrev: () => void;
	alt?: string;
}

export default function ImageLightbox({
	isOpen,
	images,
	currentIndex,
	onClose,
	onNext,
	onPrev,
	alt = "Image",
}: ImageLightboxProps) {
	// Handle keyboard navigation
	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
			if (e.key === "ArrowLeft") onPrev();
			if (e.key === "ArrowRight") onNext();
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isOpen, onClose, onNext, onPrev]);

	// Prevent body scroll when lightbox is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	if (!isOpen) return null;

	const hasMultipleImages = images.length > 1;

	return (
		<div
			className="image-lightbox-overlay"
			onClick={onClose}
			onKeyDown={(e) => {
				if (e.key === "Escape") onClose();
			}}
			// biome-ignore lint/a11y/useSemanticElements: <explanation>
			role="button"
			tabIndex={0}
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				backgroundColor: "rgba(0, 0, 0, 0.95)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				zIndex: 9999,
				padding: "20px",
			}}
		>
			{/* Close Button */}
			<button
				type="button"
				onClick={onClose}
				className="lightbox-close"
				style={{
					position: "absolute",
					top: "20px",
					right: "20px",
					background: "white",
					border: "none",
					width: "40px",
					height: "40px",
					borderRadius: "50%",
					cursor: "pointer",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					fontSize: "24px",
					color: "#000",
					zIndex: 10000,
					transition: "all 0.3s",
				}}
				aria-label="Close lightbox"
			>
				×
			</button>

			{/* Previous Button */}
			{hasMultipleImages && (
				<button
					type="button"
					onClick={(e) => {
						e.stopPropagation();
						onPrev();
					}}
					className="lightbox-prev"
					style={{
						position: "absolute",
						left: "20px",
						background: "white",
						border: "none",
						width: "40px",
						height: "40px",
						borderRadius: "50%",
						cursor: "pointer",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						fontSize: "24px",
						color: "#000",
						zIndex: 10000,
						transition: "all 0.3s",
					}}
					aria-label="Previous image"
				>
					‹
				</button>
			)}

			{/* Image */}
			<div
				onClick={(e) => e.stopPropagation()}
				onKeyDown={(e) => e.stopPropagation()}
				style={{
					maxWidth: "90%",
					maxHeight: "90vh",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<img
					src={images[currentIndex]}
					alt={`${alt} - ${currentIndex + 1}`}
					style={{
						maxWidth: "100%",
						maxHeight: "85vh",
						objectFit: "contain",
						borderRadius: "8px",
					}}
				/>
				{hasMultipleImages && (
					<div
						style={{
							color: "white",
							marginTop: "15px",
							fontSize: "14px",
						}}
					>
						{currentIndex + 1} / {images.length}
					</div>
				)}
			</div>

			{/* Next Button */}
			{hasMultipleImages && (
				<button
					type="button"
					onClick={(e) => {
						e.stopPropagation();
						onNext();
					}}
					className="lightbox-next"
					style={{
						position: "absolute",
						right: "20px",
						background: "white",
						border: "none",
						width: "40px",
						height: "40px",
						borderRadius: "50%",
						cursor: "pointer",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						fontSize: "24px",
						color: "#000",
						zIndex: 10000,
						transition: "all 0.3s",
					}}
					aria-label="Next image"
				>
					›
				</button>
			)}
		</div>
	);
}
