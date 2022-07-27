import * as z from 'zod';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FieldValues } from 'react-hook-form';
import { authService } from '@/lib/firebase';
import { MdOutlinePermIdentity, MdOutlineLock } from 'react-icons/md';
import InputField from '@/components/common/InputField/InputField';
import Form from '@/components/common/Form/Form';
import Button from '@/components/common/Button/Button';
import { toast } from 'react-toastify';

const loginSchema = z.object({
  email: z.string().min(1, '아이디를 입력해 주세요.'),
  password: z.string().min(1, '비밀번호를 입력해 주세요.'),
});

type LoginData = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const [formErrors, setFormErrors] = useState<z.ZodIssue[]>([]);

  return (
    <Form<LoginData, typeof loginSchema>
      className="space-y-3"
      errors={formErrors}
      onSubmit={async ({ data }: FieldValues) => {
        const result = loginSchema.safeParse(data);

        if (!result.success) {
          setFormErrors(result.error.errors);
          return;
        }

        signInWithEmailAndPassword(authService, data.email, data.password)
          .then((userCredential) => {
            // Signed in
            const { user } = userCredential;
            if (user) toast.success('로그인되었습니다');
          })
          .catch(({ message }) => {
            toast.error(message);
          });
      }}
    >
      {({ register }) => (
        <>
          <InputField
            type="email"
            placeholder="이메일"
            registration={register('email')}
            before={<MdOutlinePermIdentity title="이메일" />}
          />
          <InputField
            type="password"
            placeholder="비밀번호"
            registration={register('password')}
            before={<MdOutlineLock title="비밀번호" />}
          />
          <div className="form-control mt-2">
            <Button className="btn btn-primary" submitted>
              로그인
            </Button>
          </div>
        </>
      )}
    </Form>
  );
};

export default LoginForm;
