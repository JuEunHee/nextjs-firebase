import * as z from 'zod';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import Form from '@/components/common/Form/Form';
import Input from '@/components/common/Input/Input';
import Button from '@/components/common/Button/Button';
import { User } from 'firebase/auth';
import { authService, dbService } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

const postSchema = z.object({
  text: z.string().min(1, '내용을 입력해주세요'),
});

type PostData = z.infer<typeof postSchema>;

const PostForm = () => {
  const [formErrors, setFormErrors] = useState<z.ZodIssue[]>([]);

  const handleSubmit = async ({ data }: FieldValues) => {
    const result = postSchema.safeParse(data);

    if (!result.success) {
      setFormErrors(result.error.errors);
      return;
    }

    const daylogsCollection = collection(dbService, 'daylogs');

    await addDoc(daylogsCollection, {
      text: result.data.text,
      createdAt: Date.now(),
      owner: (authService.currentUser as User).uid,
    });
  };

  return (
    <Form<PostData, typeof postSchema>
      errors={formErrors}
      onSubmit={handleSubmit}
    >
      {({ register }) => (
        <>
          <Input
            type="text"
            placeholder="기록하고 싶은 일이 있나요?"
            registration={register('text')}
          />
          <Button className="btn btn-primary" submitted>
            등록
          </Button>
        </>
      )}
    </Form>
  );
};

export default PostForm;
