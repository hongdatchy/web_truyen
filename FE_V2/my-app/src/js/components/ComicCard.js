import { Card } from 'antd';
const { Meta } = Card;
import { useRouter } from "next/router";

export default function ComicCard({ comicInfo }) {

    const router = useRouter();
    const onclick = () => {
        router.push({
            pathname: "/comic",
            query: { 
                comicInfo: JSON.stringify((({ id, name }) => ({ id, name }))(comicInfo)) 
                // comicInfo: JSON.stringify(comicInfo) 
            },
        });
    }

    return (
        <Card
            onClick={onclick}
            hoverable
            style={{
                margin: 10
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <Meta title={comicInfo.name} description={comicInfo.alternative} />
        </Card>
    );
}