import React from 'react';
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

const homeUrl = '/';

const itemInfoSize = 'large';

const Book = () => {
    return (
        <div>
            <BackLink url={homeUrl} />

            <HeadingFlex>
                <ItemInfo
                    title={itemDemo.title}
                    author={itemDemo.author}
                    ratingCount={itemDemo.ratingCount}
                    averageRating={itemDemo.averageRating}
                    language={itemDemo.language}
                    cover={itemDemo.cover}
                    categories={itemDemo.categories}
                    size={itemInfoSize}
                />
                <RatingWrapper>
                    <ItemRating
                        averageRating={Math.round(Number(itemDemo.averageRating))}
                        ratingCount={itemDemo.ratingCount}
                    />
                </RatingWrapper>
            </HeadingFlex>

            <ItemSummary summary={itemDemo.summary} />

            <ItemRelatedPurchases items={itemDemo.relatedItems} />

            <Subtitle>Customer Reviews</Subtitle>
            <ReviewsFlexWrapper>
                <ItemReviewStats
                    averageRating={Math.round(Number(itemDemo.averageRating))}
                    ratingCount={itemDemo.ratingCount}
                    ratingStats={itemDemo.ratingStats}
                />
                <ItemReviewComments reviews={itemDemo.reviews} />
            </ReviewsFlexWrapper>
        </div>
    );
};

export default Book;
