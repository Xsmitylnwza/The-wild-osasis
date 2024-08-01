import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import {deleteBooking as apiDeleteBooking} from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {mutate: deleteBooking, isLoading: isDeletedBooking} = useMutation({
    mutationFn: (bookingId) => apiDeleteBooking(bookingId),
    onSuccess: () => {
      toast.success(`Booking # successfully  deleted`);
      queryClient.invalidateQueries({queryKey: ["bookings"]});
      navigate("/bookings");
    },
    onError: (err) => toast.error(err.message),
  });

  return {deleteBooking, isDeletedBooking};
}
