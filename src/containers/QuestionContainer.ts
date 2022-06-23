import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { useSelector } from '../store';

const QuestionContainer = () => {
  const dispatch = useDispatch();
  
  const answer = useSelector((state)=>state.answer)

  useEffect(() => {
    dispatch(readPost(postId));
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  const onEdit = () => {
    dispatch(setOriginalPost(post));
    navigate('/write');
  };

  const onRemove = async () => {
    try {
      await removePost(postId);
      navigate('/'); // 홈으로 이동
    } catch (e) {
      console.log(e);
    }
  };

  const ownPost = (user && user._id) === (post && post.user._id);

  return (
  );
};

export default QuestionContainer;
