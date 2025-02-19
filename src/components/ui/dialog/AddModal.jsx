/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";

const userSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email format"),
    phone: z.string().min(3, "Phone must be at least 10 digits"),
    company: z.string().min(1, "Company cannot be empty"),
  });
  

const AddModal = ({ isOpen, onClose, type, data, onSave}) => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: 0,
        company: {
          name: ''
        }
    })

    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(userSchema),
    });

    useEffect(() => {
      console.log(user);
      if(isOpen){
        if(data && type === 'edit') {
            setUser(data);
            if(user.company) {
              setValue('name', user.name);
              setValue('email', user.email);
              setValue('phone', user.phone);
              setValue('company', user.company.name);
            }
        }else{
          setUser({
            name: '',
            email: '',
            phone: 0,
            company: {
              name: ''
            }
          })
        }
      }
    }, [data, user])


    const onSubmit = (data) => {
      setLoading(true);
      onSave(data);
      setTimeout(() => {
        handleClose();
      }, 500);
    };
    const handleClose = () => {
        reset()
        setLoading(false);
        onClose()
    }  
    if (!isOpen) return null;
  
    return (
      <div className="fixed backdrop-blur-sm inset-0 bg-gray-600/50 flex items-center justify-center z-2">
        <div className="bg-white rounded-lg shadow-lg p-6 w-96">
          {/* Dialog Title */}
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {` ${type === 'add' ? 'Add' : 'Edit'} User`}
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <label className="block text-sm font-medium">Name</label>
                <input {...register("name")} className="w-full text-sm px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-200" />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium">Email</label>
                <input {...register("email")} className="w-full text-sm px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-200" />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium">Phone</label>
                <input {...register("phone")} className="w-full text-sm px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-200" />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium">Company</label>
                <input {...register("company")} className="w-full text-sm px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-200" />
                {errors.company && <p className="text-red-500 text-sm">{errors.company.message}</p>}
            </div>

            <button type="submit" disabled={loading} className={`${loading ? 'flex gap-2 justify-center text-gray-300' : 'text-white'} w-full bg-gray-900 font-semibold p-2 rounded-lg disabled:bg-gray-700 disabled:cursor-not-allowed hover:bg-gray-700 duration-150 transition-all ease-in-out`}>
                {loading && <LoaderCircle className={loading ? 'animate-spin' : ''}/>}
                Submit
            </button>
        </form>
          {/* Action Buttons */}
          <button
              onClick={() => handleClose()}
              className="w-full mt-2 px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none duration-150 transition-all ease-in-out"
            >
              Cancel
            </button>
        </div>
      </div>
    );
  };
  
  export default AddModal;