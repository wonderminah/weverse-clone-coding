import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import artistpediaData from '../data/artistpedia.json';
import './MediaPost.css';

interface MediaItem {
  title: string;
  publishedAt: number;
  postId: string;
  summary: {
    thumbnails: Array<{
      url: string;
      width: number;
      height: number;
    }>;
  };
  extension?: {
    mediaInfo?: {
      body?: string;
    };
  };
}

export default function MediaPost() {
  const { artistName, postId } = useParams<{ artistName: string; postId: string }>();
  const [mediaItem, setMediaItem] = useState<MediaItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // artistpedia.json에서 해당 미디어 아이템 찾기
    const mediaCard = artistpediaData.cards.find(card => card.title === "Media");
    if (mediaCard?.data.items) {
      const foundItem = (mediaCard.data.items as MediaItem[]).find(item => item.postId === postId);
      setMediaItem(foundItem || null);
    }
    setLoading(false);
  }, [postId]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="media-detail-loading">
          <p>미디어를 불러오는 중...</p>
        </div>
      </>
    );
  }

  if (!mediaItem) {
    return (
      <>
        <Header />
        <div className="media-detail-not-found">
          <h2>미디어를 찾을 수 없습니다</h2>
          <p>요청하신 미디어가 존재하지 않거나 삭제되었습니다.</p>
          <a href={`/${artistName}/artistpedia`}>아티스트 페이지로 돌아가기</a>
        </div>
      </>
    );
  }

  const date = new Date(mediaItem.publishedAt);
  const formattedDate = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;

  return (
    <>
      <Header />
      <div className="media-detail-container">
        <div className="media-detail-header">
          <a href={`/${artistName}/artistpedia`} className="back-button">
            ← 아티스트 페이지로 돌아가기
          </a>
        </div>
        
        <div className="media-detail-content">
          <div className="media-detail-image">
            <img 
              src={mediaItem.summary.thumbnails[0]?.url} 
              alt={mediaItem.title}
              className="media-image"
            />
          </div>
          
          <div className="media-detail-info">
            <h1 className="media-title">{mediaItem.title}</h1>
            <div className="media-date">{formattedDate}</div>
            
            {mediaItem.extension?.mediaInfo?.body && (
              <div className="media-description">
                <p>{mediaItem.extension.mediaInfo.body}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
