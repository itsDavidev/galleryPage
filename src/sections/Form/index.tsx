import usePhotoRandom from '../../hooks/usePhotoRanom';
import { photoType, typeDataPhoto } from '../../types/types';
import styles from './form.module.scss';

const FormSection = () => {
	const dataPhoto: typeDataPhoto = usePhotoRandom({ count: 1, query: 'dark' });
	const photo: photoType = dataPhoto[0];
	return (
		<>
			<section className={styles.form}>
				<article className={styles.contentForm}>
					<picture className={styles.imgForm}>
						<img src={photo?.urls?.small} alt='formImage' />
					</picture>
					<div className={styles.renderForm}>
						<form>
							<h1 className={styles.titleForm}>Contact</h1>
							<label className={styles.formInputs}>
								<input
									type='text'
									placeholder='Your Name'
									name='name'
									id='formId'
								/>
								<input
									type='email'
									name='email'
									id='formEmail'
									placeholder='Your Email'
								/>
							</label>
							<label>
								<textarea
									name='message'
									id='formMessage'
									cols={40}
									rows={5}
									placeholder='Message'
								/>
							</label>
						</form>
					</div>
				</article>
			</section>
		</>
	);
};

export default FormSection;
