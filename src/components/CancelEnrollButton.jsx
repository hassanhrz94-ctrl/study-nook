"use client";

import { deleteEnrollment } from "@/lib/rooms/action";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";

const CancelEnrollButton = ({ enrolmentId, token }) => {
  const router = useRouter();

  const handleDeleteEnrollment = async () => {
  const data = await deleteEnrollment(enrolmentId, token);

  if (data?.deletedCount) {
    router.refresh(); 
  } else {
    alert("Cancel failed");
  }
};
  return (
    <AlertDialog>
      <Button color="danger" variant="light" size="sm">
        Cancel
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Confirm Cancellation
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p className="text-slate-600">
                Are you sure you want to cancel this enrollment? This action cannot be undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Keep Enrollment
              </Button>

              <Button
                color="danger"
                className="font-bold"
                onPress={handleDeleteEnrollment}
              >
                Yes, Cancel
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default CancelEnrollButton;