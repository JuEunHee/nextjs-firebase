import * as z from 'zod';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { sendPasswordResetEmail } from 'firebase/auth';
import { authService } from '@/lib/firebase';
import { MdOutlinePermIdentity } from 'react-icons/md';
import InputField from '@/components/common/InputField/InputField';
import Form from '@/components/common/Form/Form';
import Button from '@/components/common/Button/Button';
import { toast } from 'react-toastify';

const findPasswordSchema = z.object({
  email: z.string().min(1, '아이디를 입력해 주세요.'),
});

type FindPasswordData = z.infer<typeof findPasswordSchema>;

const LoginForm = () => {
  const [formErrors, setFormErrors] = useState<z.ZodIssue[]>([]);

  return (
    <Form<FindPasswordData, typeof findPasswordSchema>
      className="space-y-3 mb-1"
      errors={formErrors}
      onSubmit={async ({ data }: FieldValues) => {
        const result = findPasswordSchema.safeParse(data);

        if (!result.success) {
          setFormErrors(result.error.errors);
          return;
        }

        sendPasswordResetEmail(authService, data.email)
          .then(() => {
            toast.success(
              '입력된 이메일 주소로 비밀번호 재설정 이메일이 전송되었습니다.',
            );
          })
          .catch((e) => {
            toast.error(e.message);
          });
      }}
    >
      {({ register, formState: { errors } }) => (
        <>
          <InputField
            type="email"
            placeholder="이메일"
            invalid={errors.email ? 'true' : 'false'}
            registration={register('email')}
            before={<MdOutlinePermIdentity title="이메일" />}
          />
          <div className="form-control mt-2">
            <Button className="btn btn-primary" submitted>
              비밀번호 찾기
            </Button>
          </div>
        </>
      )}
    </Form>
  );
};

export default LoginForm;
