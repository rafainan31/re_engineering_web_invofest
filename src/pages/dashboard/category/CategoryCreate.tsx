import { useForm } from "react-hook-form";
import Button from "../../../components/Button";
import { InputText } from "../../../components/ui/InputText";

type FormData = {
  name: string;
};

export default function CategoryCreate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Data kategori:", data);
    alert("Kategori berhasil dibuat!");
  };

  return (
    <div className="flex justify-center items-start min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md w-96 border">
        {/* Title */}
        <h2 className="text-2xl font-semibold mb-4">
          Add New Category
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <InputText
            label="Nama"
            name="name"
            register={register}
            error={errors.name?.message}
          />

          <Button
            label="+ Simpan"
            type="submit"
            variant="primary"
            className="w-full"
          />
        </form>
      </div>
    </div>
  );
}