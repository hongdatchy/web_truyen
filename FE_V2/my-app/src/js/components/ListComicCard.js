import { Card, Pagination} from 'antd';
import ComicCard from './ComicCard';
const { Meta } = Card;
import { Row, Col } from 'antd';
import { useState } from 'react';



export default function ListComicCard({ listComic }) {

    const pageSize = 2
    const [current, setCurrent] = useState(1);
    const onChange = (page) => {
      setCurrent(page);
    };

    const getCurrentListComic =()=>{
        let start = (current-1) * pageSize
        return start + pageSize <= listComic.length ? listComic.slice(start, start + pageSize) : listComic
    }

    return (
        <>
            <Row>
                {
                    getCurrentListComic().map(comic =>
                        <Col span={6} key={comic.id}>
                            <ComicCard comicInfo={comic} />
                        </Col>
                    )
                }
            </Row>
            <Pagination current={current} onChange={onChange} total={listComic.length} pageSize={pageSize}/>
        </>
        
    );
}