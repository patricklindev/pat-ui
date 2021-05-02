import * as React from 'react';
import Rating from './Rating';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Rating',
  component: Rating,
};

//used _ here for documentation purposes as Rating conflicts.
export const DefaultRating = () => {
  return (
    <div>
      <h4>Default Rating</h4>
      <Rating getRating={(rating) => action(`${rating}`)()} />
    </div>
  );
};

export const DiffTypeRating = () => {
  const [like, setLike] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const handelClick = () => {
    setLike(!like);
    if (count === 0) {
      setCount(count + 1);
      action('Liked')();
    }
    if (count === 1) {
      setCount(count - 1);
      action('UnLiked')();
    }
  };
  return (
    <div>
      <h4>Five Point Rating</h4>
      <p>Five point rating is used for a fixed scale i.e. 0-5</p>
      <Rating className="patComponent" ratingValue={3} />

      <h4>Progress Rating</h4>
      <p>Progress is used to show results from ratings</p>
      <Rating className="patComponent" ratingtype="progress" barValue={20} />
      <Rating className="patComponent" ratingtype="progress" barValue={30} />
      <Rating className="patComponent" ratingtype="progress" barValue={70} />
      <Rating className="patComponent" ratingtype="progress" barValue={40} />

      <h4>Like Rating</h4>
      <p>Like and dislike ratings are used to like and unlike posts</p>
      <p>
        <i>likeclicked </i>set to true
      </p>
      <Rating className="patComponent" ratingtype="like" likeclicked={true} />
      <p>
        <i>likeclicked </i>set to false
      </p>
      <Rating className="patComponent" ratingtype="like" likeclicked={false} />
      <p>
        Working Example{' '}
        <small>
          (using <i>useState</i> hook)
        </small>
      </p>
      <Rating
        className="patComponent"
        clickLike={handelClick}
        ratingtype="like"
        likeclicked={like}
        setLikeCount={count}
      />
    </div>
  );
};

export const DiffSizeRating = () => {
  return (
    <div className="ratingSection">
      <section>
        <h4>Five Point Rating</h4>
        <p>Five point rating can vary in size</p>
        <Rating size={10} className="patComponent" ratingValue={3} />
        <Rating size={20} className="patComponent" ratingValue={3} />
        <Rating size={30} className="patComponent" ratingValue={3} />
        <Rating size={40} className="patComponent" ratingValue={3} />
      </section>

      <section>
        <h4>Progress Rating</h4>
        <p>Progress rating can vary in size</p>
        <Rating
          className="patComponent"
          ratingtype="progress"
          barValue={55}
          size={3}
          noText={true}
        />
        <Rating
          className="patComponent"
          ratingtype="progress"
          barValue={55}
          size={6}
          noText={true}
        />
        <Rating
          className="patComponent"
          ratingtype="progress"
          barValue={55}
          size={13}
          noText={true}
        />
        <Rating
          className="patComponent"
          ratingtype="progress"
          barValue={55}
          size={12}
        />
        <Rating
          className="patComponent"
          ratingtype="progress"
          barValue={55}
          size={25}
        />
      </section>

      <section>
        <h4>Like Rating </h4>
        <p>Like rating can vary in size</p>
        <Rating className="patComponent" ratingtype="like" size={10} />
        <Rating className="patComponent" ratingtype="like" size={30} />
        <Rating className="patComponent" ratingtype="like" size={40} />
      </section>
    </div>
  );
};

export const DiffColorRating = () => {
  return (
    <div className="ratingSection">
      <section>
        <h4>Five Point Rating</h4>
        <p>Five point rating comes in solid colors</p>
        <Rating className="patComponent" ratingValue={3} />
        <Rating
          selectedColor={'green'}
          unselectColor={'gray'}
          className="patComponent"
          ratingValue={3}
        />
        <Rating
          selectedColor={'green'}
          unselectColor={'red'}
          className="patComponent"
          ratingValue={2}
        />
      </section>

      <section>
        <h4>Progress Rating</h4>
        <p>Progress rating has gradient and solid colors</p>
        <Rating
          barcolor={{ left: 'orange', right: 'yellow' }}
          className="patComponent"
          ratingtype="progress"
          barValue={30}
        />
        <Rating
          barcolor={{ left: 'orange', right: 'red' }}
          className="patComponent"
          ratingtype="progress"
          barValue={55}
        />
        <Rating
          barcolor={{ left: 'yellow', right: 'green' }}
          className="patComponent"
          ratingtype="progress"
          barValue={70}
        />
        <Rating
          barcolor={{ left: 'green', right: 'lightblue' }}
          className="patComponent"
          ratingtype="progress"
          barValue={40}
        />
        <Rating
          barcolor={{ left: 'orange', right: 'pink' }}
          className="patComponent"
          ratingtype="progress"
          barValue={80}
        />
        <Rating
          barcolor={{ left: 'lightblue', right: 'lightblue' }}
          className="patComponent"
          ratingtype="progress"
          barValue={35}
        />
      </section>

      <section>
        <h4>Like Rating</h4>
        <p>Like rating comes in solid colors</p>
        <Rating
          className="patComponent"
          ratingtype="like"
          likeHeartColor="green"
          likeclicked={true}
        />
        <Rating
          className="patComponent"
          ratingtype="like"
          likeHeartColor="gold"
          likeclicked={true}
        />
        <Rating
          className="patComponent"
          ratingtype="like"
          likeHeartColor="blue"
          likeclicked={true}
        />
      </section>
    </div>
  );
};
export const DisabledRating = () => {
  return (
    <div className="ratingSection">
      <section>
        <h4>Five Point Rating</h4>
        <p>Five point rating can be disabled</p>
        <Rating className="patComponent" ratingValue={3} disabled={true} />
      </section>

      <section>
        <h4>Progress Rating</h4>
        <p>Progress rating cannot be disabled</p>
        <Rating
          barcolor={{ left: 'orange', right: 'red' }}
          className="patComponent"
          ratingtype="progress"
          barValue={55}
        />
      </section>

      <section>
        <h4>Like Rating</h4>
        <p>Like rating can be disabled</p>
        <Rating
          className="patComponent"
          ratingtype="like"
          selectedColor={'green'}
          disabled={true}
        />
      </section>
    </div>
  );
};
