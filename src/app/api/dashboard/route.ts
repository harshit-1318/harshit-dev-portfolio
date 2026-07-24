import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import dbConnect from '@/lib/db';
import Project from '@/models/Project';
import Certificate from '@/models/Certificate';
import Experience from '@/models/Experience';
import Skill from '@/models/Skill';
import ContactMessage from '@/models/ContactMessage';
import Education from '@/models/Education';

export async function GET() {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();

    const [
      projectCount,
      certificateCount,
      experienceCount,
      skillCount,
      messageCount,
      unreadMessageCount,
    ] = await Promise.all([
      Project.countDocuments(),
      Certificate.countDocuments(),
      Experience.countDocuments(),
      Skill.countDocuments(),
      ContactMessage.countDocuments(),
      ContactMessage.countDocuments({ read: false }),
    ]);

    return NextResponse.json({
      projects: projectCount,
      certificates: certificateCount,
      experiences: experienceCount,
      skills: skillCount,
      messages: messageCount,
      unreadMessages: unreadMessageCount,
    });
  } catch (error) {
    console.error('Dashboard API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
