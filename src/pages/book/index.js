import React from 'react';
import { HeadingFlex, RatingWrapper } from './styled';
import Back from '../../components/back';
import ItemInfo from '../../components/item-info';
import ItemRating from '../../components/item-rating';
import ItemSummary from '../../components/item-summary';

const homeUrl = '/';

const itemDemo = {
    title: 'Title',
    author: 'Author',
    ratingCount: 42,
    averageRating: '3',
    language: 'Spanish',
    cover:
        'https://uploads-ssl.webflow.com/5e46eb28f540698137a3a5b3/5e47268c6fdb67cb98b7dcb4_tmp-book.png',
    categories: ['Adventures', 'Documental'],
    summary:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam nostrum consequatur eum consequuntur repellendus doloribus dolores, quo architecto maxime libero, suscipit voluptatibus mollitia aperiam velit sequi ipsa corrupti est.',
};

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
        </div>
    );
};

export default Book;
