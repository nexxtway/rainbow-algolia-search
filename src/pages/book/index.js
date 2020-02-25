import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDocOnce } from 'rainbow-firebase-hooks';
import { Spinner } from 'react-rainbow-components';
import { itemDemo } from './dummyData';
import { ContainerMedium } from '../../styled';
import { HeadingFlex, RatingWrapper, ReviewsFlexWrapper } from './styled';
import BackLink from '../../components/back-link';
import Subtitle from '../../components/subtitle';
import ItemInfo from '../../components/item-info';
import ItemRating from '../../components/item-rating';
import ItemSummary from '../../components/item-summary';
import ItemRelatedPurchases from '../../components/item-related-purchases';
import ItemReviewStats from '../../components/item-review-stats';
import ItemReviewComments from '../../components/item-review-comments';
import { getRatingCount } from '../../helpers/getRatingCount';
import { getStatsFromStars } from '../../helpers/getStatsFromStars';
import { fetchBooks } from '../../services/algolia';

const homeUrl = '/';

const Book = () => {
    const { id } = useParams();
    const [currentBook, isLoading] = useDocOnce({
        path: `books/${id}`,
    });
    const [relatedBooks, setRelatedBooks] = useState([]);

    useEffect(() => {
        if (currentBook && currentBook.data.authors) {
            const bookAuthors = currentBook.data.authors.split(',');
            const firstAuthor = bookAuthors[0];

            fetchBooks(firstAuthor, currentBook.id).then(books => {
                setRelatedBooks(books);
            });
        }
    }, [currentBook]);

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
        releaseDate,
    } = currentBook.data;
    const ratingCount = getRatingCount(stars);
    const roundedAverageRating = Math.round(Number(averageRating));
    const ratingStats = getStatsFromStars(stars);
    const relatedBooksNormalized = relatedBooks.map(book => ({
        id: book.objectID,
        ...book,
    }));

    return (
        <>
            <BackLink url={homeUrl} />

            <ContainerMedium>
                <HeadingFlex>
                    <ItemInfo
                        title={title}
                        titleColor="main"
                        author={authors}
                        language={language}
                        cover={cover}
                        categories={categories}
                        releaseDate={releaseDate}
                        size="large"
                    />
                    <RatingWrapper>
                        <ItemRating
                            averageRating={roundedAverageRating}
                            ratingCount={ratingCount}
                        />
                    </RatingWrapper>
                </HeadingFlex>

                <ItemSummary summary={summary} />

                <ItemRelatedPurchases items={relatedBooksNormalized} />
                <Subtitle>Customer Reviews</Subtitle>
                <ReviewsFlexWrapper>
                    <ItemReviewStats
                        averageRating={averageRating}
                        ratingCount={ratingCount}
                        ratingStats={ratingStats}
                    />
                    <ItemReviewComments reviews={itemDemo.reviews} />
                </ReviewsFlexWrapper>
            </ContainerMedium>
        </>
    );
};

export default Book;
