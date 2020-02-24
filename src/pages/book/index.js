import React from 'react';
import { useParams } from 'react-router-dom';
import { useDocOnce } from 'rainbow-firebase-hooks';
import { Spinner } from 'react-rainbow-components';
import { itemDemo } from './dummyData';
import { HeadingFlex, RatingWrapper, ReviewsFlexWrapper } from './styled';
import Subtitle from '../../components/subtitle';
import BackLink from '../../components/back-link';
import ItemInfo from '../../components/item-info';
import ItemRating from '../../components/item-rating';
import ItemSummary from '../../components/item-summary';
import ItemRelatedPurchases from '../../components/item-related-purchases';
import ItemReviewStats from '../../components/item-review-stats';
import ItemReviewComments from '../../components/item-review-comments';
import getRatingCount from '../../helpers/getRatingCount';
import getStatsFromStars from '../../helpers/getStatsFromStars';

const homeUrl = '/';

const Book = () => {
    const { id } = useParams();
    const [currentBook, isLoading] = useDocOnce({
        path: `books/${id}`,
    });

    if (isLoading) return <Spinner />;

    const {
        title,
        authors,
        language,
        cover,
        categories,
        averageRating,
        stars,
        summary,
    } = currentBook.data;
    const ratingCount = getRatingCount(stars);
    const roundedAverageRating = Math.round(Number(averageRating));
    const ratingStats = getStatsFromStars(stars);

    return (
        <div>
            <BackLink url={homeUrl} />

            <HeadingFlex>
                <ItemInfo
                    title={title}
                    author={authors}
                    language={language}
                    cover={cover}
                    categories={categories}
                    size="large"
                />
                <RatingWrapper>
                    <ItemRating averageRating={roundedAverageRating} ratingCount={ratingCount} />
                </RatingWrapper>
            </HeadingFlex>

            <ItemSummary summary={summary} />

            <ItemRelatedPurchases items={itemDemo.relatedItems} />

            <Subtitle>Customer Reviews</Subtitle>
            <ReviewsFlexWrapper>
                <ItemReviewStats
                    averageRating={averageRating}
                    ratingCount={ratingCount}
                    ratingStats={ratingStats}
                />
                <ItemReviewComments reviews={itemDemo.reviews} />
            </ReviewsFlexWrapper>
        </div>
    );
};

export default Book;
