import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings } from "lucide-react";

import {
  useGetSettingsQuery,
  useUpdateSettingsMutation,
} from "@/store/api/settings.api";

import { settingsSchema, type SettingsFormValues } from "@/schema/settings.schema";



const teams = [
  "engineering",
  "product",
  "support",
  "billing",
  "design",
  "security",
] as const;
import { useEffect, useRef } from "react";
// ... other imports remain the same ...
import { toast } from "sonner";

export default function SettingsModal() {
  const { data, isLoading: isFetching } = useGetSettingsQuery();
  const [updateSettings, { isLoading: isSaving }] = useUpdateSettingsMutation();

  const closeRef = useRef<HTMLButtonElement>(null);

  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      teamEmails: {
        engineering: "",
        product: "",
        support: "",
        billing: "",
        design: "",
        security: "",
      },
    },
  });

  const { register, handleSubmit, reset, formState: { errors } } = form;

  useEffect(() => {
    if (!data?.data?.teamEmails) return;

    const api = data.data.teamEmails;

    reset({
      teamEmails: {
        engineering: api.engineering ?? "",
        product: api.product ?? "",
        support: api.support ?? "",
        billing: api.billing ?? "",
        design: api.design ?? "",
        security: api.security ?? "",
      },
    });
  }, [data, reset]);

  const onSubmit = handleSubmit(async (values) => {
    try {
      await updateSettings(values).unwrap();
      toast.success("Team email settings have been updated.");
      
      // Close the modal after successful save
      closeRef.current?.click();
    } catch (err: any) {
      console.error("Failed to save settings:", err);
      toast.error(
        err?.data?.message || "Failed to update settings. Please try again."
      );
    }
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex gap-2" disabled={isFetching}>
          <Settings size={16} />
          Settings
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Team Email Settings</DialogTitle>
        </DialogHeader>

        <form onSubmit={onSubmit} className="space-y-5 mt-4">
          {teams.map((team) => (
            <div key={team} className="space-y-1.5">
              <Label htmlFor={`team-emails-${team}`} className="capitalize">
                {team}
              </Label>
              <Input
                id={`team-emails-${team}`}
                type="email"
                placeholder={`${team}@example.com`}
                {...register(`teamEmails.${team}`)}
              />
              {errors.teamEmails?.[team] && (
                <p className="text-sm text-destructive mt-1">
                  {errors.teamEmails[team]?.message || "Invalid email address"}
                </p>
              )}
            </div>
          ))}

          <DialogFooter className="pt-6 gap-3 sm:gap-4">
            {/* Hidden button we click programmatically */}
            <DialogClose asChild>
              <button type="button" ref={closeRef} className="sr-only">
                Close
              </button>
            </DialogClose>

            <DialogClose asChild>
              <Button type="button" variant="outline" className="px-8">
                Cancel
              </Button>
            </DialogClose>

            <Button
              type="submit"
              disabled={isSaving || isFetching || Object.keys(errors).length > 0}
            >
              {isSaving ? "Saving..." : "Save Settings"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}