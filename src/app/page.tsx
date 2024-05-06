import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import type { NewestPostListDto } from '@/app/api/flagship/newest-posts/route';
import fetcher from '@/shared/api/fetcher';
import { AutoTypo } from '@/shared/ui/auto-typo';
import { Typography } from '@/shared/ui/typography';
import styles from './page.module.css';

export default async function HomePage() {
  const posts: NewestPostListDto = await fetcher('/api/flagship/newest-posts');

  return (
    <>
      <div className={styles.hero}>
        <div className={clsx(styles.overlay, styles.heroOverlay)}>
          <h1 className={styles.heroTitle}>
            <span>고객을 위한</span>
            <span className={styles.heroTitleAuto}>
              <AutoTypo words={['최상의 서비스', '최선의 선택']} />
            </span>
          </h1>

          <Typography type="body2" className={styles.heroSubTitle}>
            안전공사! 품질공사! 책임공사!
          </Typography>
          <Typography type="detail1" className={styles.heroDescription}>
            엘코엘시즈가 고객님들께 드리는 약속입니다.
            <br />
            엘코엘시즈의 프리미엄 서비스로 고객님들의 신용과 재산을 지켜드리겠습니다.
          </Typography>
        </div>
      </div>

      <main>
        <div className={styles.previewCards}>
          {posts.map(({ flagshipDetail, newestPost }) => (
            <Link
              key={`preview-${flagshipDetail.key}`}
              href={`/construction-flagship/${flagshipDetail.key}`}
              className={styles.previewCard}
            >
              {newestPost && <Image src={newestPost.firstImage.src} alt={newestPost.firstImage.alt} fill />}
              {!newestPost && <Image src="/flagship-default.jpeg" alt="공사 기본 이미지" fill />}

              <div className={clsx(styles.overlay, styles.previewCardOverlay)}>
                <Typography type="body2" className={styles.preivewCardLabel}>
                  {flagshipDetail.label}
                </Typography>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
