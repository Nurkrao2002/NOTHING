"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function CustomizationHub() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Customization Hub</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="logo">Logo</Label>
            <Input id="logo" type="file" />
          </div>
          <div>
            <Label htmlFor="color-palette">Color Palette</Label>
            <Input id="color-palette" type="color" />
          </div>
          <Button>Save Changes</Button>
        </div>
      </CardContent>
    </Card>
  );
}
