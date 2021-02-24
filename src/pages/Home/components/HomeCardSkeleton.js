import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const HomeCardSkeleton = _ => {
  return (
    <div id="HomeCardSkeleton" className="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2" >
      <div className="custom-skeleton-card" style={{ borderRadius: 16 }}>
        <div style={{ padding: 8, }}>
          <SkeletonTheme color="#dedede" highlightColor="#eee">
            <Skeleton height={328} style={{ borderRadius: 12 }} />
          </SkeletonTheme>
        </div>
        <div className="card-body">
          <div style={{ minWidth: 0, paddingLeft: 24, paddingRight: 24, marginTop: 12 }}>
            <SkeletonTheme color="#dedede" highlightColor="#eee">
              <Skeleton count={3} />
            </SkeletonTheme>
          </div>

        </div>
      </div >
    </div >
  );
};

export default HomeCardSkeleton;
