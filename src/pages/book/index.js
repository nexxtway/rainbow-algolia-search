import React from 'react';
import { itemDemo } from './dummyData';
import { HeadingFlex, RatingWrapper } from './styled';
import Back from '../../components/back';
import ItemInfo from '../../components/item-info';
import ItemRating from '../../components/item-rating';
import ItemSummary from '../../components/item-summary';
import ItemRelatedPurchases from '../../components/item-related-purchases';

const homeUrl = '/';

const Book = () => {
    return (
        <div>
            <Back url={homeUrl} />

            <HeadingFlex>
                <ItemInfo
                    title={itemDemo.title}
                    author={itemDemo.author}
                    ratingCount={itemDemo.ratingCount}
                    averageRating={itemDemo.averageRating}
                    language={itemDemo.language}
                    cover={itemDemo.cover}
                    categories={itemDemo.categories}
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
        </div>
    );
};

export default Book;
